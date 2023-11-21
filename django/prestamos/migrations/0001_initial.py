# Generated by Django 4.2.7 on 2023-11-10 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('loan_id', models.AutoField(primary_key=True, serialize=False)),
                ('loan_type', models.CharField(max_length=20)),
                ('loan_total', models.IntegerField()),
                ('loan_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'prestamo',
                'managed': False,
            },
        ),
    ]
