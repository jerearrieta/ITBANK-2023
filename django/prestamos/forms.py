from django import forms

class PrestamoForm(forms.Form):
    TIPOS_CLIENTE = [
        ('BLACK', 'BLACK'),
        ('GOLD', 'GOLD'),
        ('CLASSIC', 'CLASSIC'),
    ]

    tipo_cliente = forms.ChoiceField(choices=TIPOS_CLIENTE)
    fecha_inicio = forms.DateField()


