from django import forms

class TransferenciaForm(forms.Form):
    TRANSFERENCIA_RAZON = [
        ('Varios', 'Varios'),
        ('Alquileres', 'Alquileres'),
        ('Cuotas', 'Cuotas'),
        ('Expensas', 'Expensas'),
        ('Facturas', 'Facturas'),
        ('Haberes', 'Haberes'),
        ('Honorarios', 'Honorarios'),
        ('Prestamos', 'Prestamos'),
        ('Seguros', 'Seguros'),        
    ]
    monto = forms.DecimalField(min_value=0, required=True)
    razon = forms.ChoiceField(choices=TRANSFERENCIA_RAZON)