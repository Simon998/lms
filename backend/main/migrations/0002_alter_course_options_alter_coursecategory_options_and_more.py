# Generated by Django 4.2.7 on 2023-11-27 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': '3. Courses'},
        ),
        migrations.AlterModelOptions(
            name='coursecategory',
            options={'verbose_name_plural': '2. Course Categories'},
        ),
        migrations.AlterModelOptions(
            name='instructor',
            options={'verbose_name_plural': '1. Instructors'},
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name_plural': '4. Students'},
        ),
        migrations.AlterField(
            model_name='instructor',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]