from rest_framework.permissions import BasePermission


class IsCustomer(BasePermission):

	def has_permission(self, request, view):
		user = request.user
		return bool(user and user.is_authenticated and hasattr(user, "cliente"))


class CustomerPermissions(BasePermission):

	def __init__(self, allowed_actions=None, allowed_methods=None, customer_field_name="cliente"):
		if allowed_actions is None:
			allowed_actions = []

		if allowed_methods is None:
			allowed_methods = []

		self.allowed_actions = allowed_actions
		self.allowed_methods = allowed_methods
		self.customer_field_name = customer_field_name

	def has_permission(self, request, view):
		user = request.user
		is_client = bool(user and user.is_authenticated and hasattr(user, "cliente"))

		if request.method in ("OPTIONS", "HEAD"):
			has_permission = True

		elif self.allowed_actions:
			has_permission = view.action in self.allowed_actions

		else:
			has_permission = request.method in self.allowed_methods

		return is_client and has_permission

	def has_object_permission(self, request, view, obj):
		authenticated_customer = request.user.cliente

		if not self.customer_field_name:
			return authenticated_customer == obj

		customer_field_names = self.customer_field_name.split(".")
		customer_field = getattr(obj, customer_field_names[0])
		for field_name in customer_field_names[1:]:
			customer_field = getattr(customer_field, field_name)

		return authenticated_customer == customer_field
