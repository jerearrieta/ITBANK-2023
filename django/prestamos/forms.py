from django import forms

class PrestamoForm(forms.Form):
    TIPOS_PRESTAMO = [
        ('hipotecario', 'Hipotecario'),
        ('personal', 'Personal'),
        ('prendario', 'Prendario'),
    ]

    tipo_prestamo = forms.ChoiceField(choices=TIPOS_PRESTAMO)
    fecha_inicio = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))