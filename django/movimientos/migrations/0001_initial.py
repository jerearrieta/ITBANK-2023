# Generated by Django 4.2.7 on 2023-11-10 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movimientos',
            fields=[
                ('movimiento_id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_operacion', models.CharField(blank=True, max_length=50, null=True)),
                ('monto', models.IntegerField(blank=True, null=True)),
                ('hora', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'movimientos',
                'managed': False,
            },
        ),
    ]
