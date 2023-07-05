# Django imports
from django.contrib.auth.models import User
from rest_framework import generics, status, views, permissions, authentication
from clientapp import serializers
from rest_framework.response import Response
# Create your views here.


class ClientRegistrationViewset(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.UserSerializer


class ClientDetailsViewset(views.APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        '''
        Authorization header provides token which with automatic authentication
        adds up the user object in the request
        '''
        try:
            client = User.objects.get(id=request.user.id)
            serializer = serializers.UserSerializer(client)
            client_profile = serializer.data
            client_profile.pop('password', None)  # Eliminating the password
            return Response(client_profile)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)
