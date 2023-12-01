from rest_framework import permissions


class IsEmployee(permissions.BasePermission):
	"""
	Allows access only to authenticated employees.
	"""

	def has_permission(self, request, view):
		user = request.user
		return bool(user and user.is_authenticated and hasattr(user, "empleado"))
