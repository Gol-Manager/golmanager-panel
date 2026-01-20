# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Customer(models.Model):
    email = models.CharField(unique=True, max_length=180, blank=True, null=True)
    username = models.CharField(unique=True, max_length=20, blank=True, null=True)
    roles = models.JSONField()
    password = models.CharField(max_length=255)
    enabled = models.IntegerField()
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    celular = models.CharField(max_length=255, blank=True, null=True)
    image = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    country = models.ForeignKey('Country', models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    season_active = models.IntegerField(blank=True, null=True)
    type_account = models.CharField(max_length=255, blank=True, null=True)
    is_pro = models.IntegerField(blank=True, null=True)
    purchase = models.TextField(blank=True, null=True)
    membership_id = models.CharField(max_length=255, blank=True, null=True)
    coupon_status = models.IntegerField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    google_auth_code = models.CharField(max_length=16, blank=True, null=True)
    google_auth_code_verified = models.IntegerField(blank=True, null=True)
    is_deleted = models.IntegerField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    purchase_platform = models.TextField(blank=True, null=True)
    plain_password = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customer'


class Country(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    code = models.CharField(max_length=255)
    flag = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'country'
