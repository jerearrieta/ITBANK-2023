# Generated by Django 4.2.7 on 2023-12-03 21:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emisor', models.CharField(max_length=100)),
                ('monto', models.IntegerField()),
                ('pdf', models.FileField(upload_to='facturas/')),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fue_pagada', models.BooleanField()),
                ('fecha_pago', models.DateTimeField()),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='facturas', related_query_name='factura', to='clientes.cliente')),
            ],
        ),
    ]