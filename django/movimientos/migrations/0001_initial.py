# Generated by Django 4.2.7 on 2023-11-10 17:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cuenta', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movimientos',
            fields=[
                ('movimiento_id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_operacion', models.CharField(blank=True, max_length=50, null=True)),
                ('monto', models.IntegerField(blank=True, null=True)),
                ('hora', models.DateTimeField(auto_now_add=True)),
                ('numero_cuenta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='cuenta.cuenta')),
            ],
            options={
                'db_table': 'movimientos',
            },
        ),
    ]
