from rest_framework.permissions import BasePermission


class IsEmployee(BasePermission):

	def has_permission(self, request, view):
		user = request.user
		return bool(user and user.is_authenticated and hasattr(user, "empleado"))


class EmployeePermissions(BasePermission):

	def __init__(self, allowed_actions=None, allowed_methods=None):
		if allowed_actions is None:
			allowed_actions = []

		if allowed_methods is None:
			allowed_methods = []

		self.allowed_actions = allowed_actions
		self.allowed_methods = allowed_methods

	def has_permission(self, request, view):
		user = request.user
		is_employee = bool(user and user.is_authenticated and hasattr(user, "empleado"))

		if request.method in ("OPTIONS", "HEAD"):
			has_permission = True

		elif self.allowed_actions:
			has_permission = view.action in self.allowed_actions

		else:
			has_permission = request.method in self.allowed_methods

		return is_employee and has_permission
