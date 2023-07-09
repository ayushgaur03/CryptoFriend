from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email',
                  'first_name', 'last_name', 'password']

    def create(self, validated_data):
        client = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''))
        client.set_password(validated_data['password'])
        client.save()
        return client
