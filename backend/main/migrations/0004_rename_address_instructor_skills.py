# Generated by Django 4.2.7 on 2023-12-04 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_instructor_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='instructor',
            old_name='address',
            new_name='skills',
        ),
    ]
