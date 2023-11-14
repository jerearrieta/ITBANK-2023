from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def home(req):
	user = req.user

	context = {
		"full_name": f"{user.first_name} {user.last_name}"
	}

	return render(req, "base/home.html", context)
