# Generated by Django 3.1.1 on 2020-09-05 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Friends',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.CharField(choices=[('mammals', '포유류'), ('birds', '조류'), ('amphibians', '양서파충류'), ('fishs', '어류'), ('insects', '곤충류'), ('invertebrates', '무척추동물')], max_length=20)),
                ('level', models.CharField(choices=[('first', '1급'), ('second', '2급'), ('third', '3급')], max_length=10)),
                ('kor_name', models.CharField(max_length=30)),
                ('scientific_name', models.CharField(max_length=100)),
                ('image', models.ImageField(default='static/default/default_logo.png', upload_to='')),
            ],
        ),
    ]
