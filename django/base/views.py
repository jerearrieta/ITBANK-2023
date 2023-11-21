from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from movimientos.models import Movimiento


# Create your views here.
@login_required
def home(req):
    user = req.user

    movimientos = Movimiento.objects.filter(cuenta__cliente=user.cliente)

    context = {
        "full_name": f"{user.first_name} {user.last_name}",
        "movimientos": movimientos,
    }

    return render(req, "base/home.html", context)
