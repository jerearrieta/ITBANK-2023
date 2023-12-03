from rest_framework.permissions import BasePermission


class UserPermissions(BasePermission):

	def __init__(self, allowed_actions=None, allowed_methods=None):
		if allowed_actions is None:
			allowed_actions = []

		if allowed_methods is None:
			allowed_methods = []

		self.allowed_actions = allowed_actions
		self.allowed_methods = allowed_methods

	def has_permission(self, request, view):
		if request.method in ("OPTIONS", "HEAD"):
			has_permission = True

		elif self.allowed_actions:
			has_permission = view.action in self.allowed_actions

		else:
			has_permission = request.method in self.allowed_methods

		return has_permission
