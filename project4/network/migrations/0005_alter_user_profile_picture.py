# Generated by Django 5.0.6 on 2024-06-08 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0004_alter_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.ImageField(default='default_pfp/default_pfp.png', upload_to='profile_pictures'),
        ),
    ]