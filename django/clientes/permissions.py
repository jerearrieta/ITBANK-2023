from rest_framework import permissions


class IsCustomer(permissions.BasePermission):
	"""
	Allows access only to authenticated customers.
	"""

	def has_permission(self, request, view):
		user = request.user
		return bool(user and user.is_authenticated and hasattr(user, "cliente"))
