# Django imports
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, logout, login
from rest_framework import generics, status, views, permissions, authentication
from rest_framework.authtoken.models import Token
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

    def patch(self, request):
        '''
            Handles the client profile patch request. Mainly used to update name of client
        '''
        try:
            client = User.objects.get(id=request.user.id)
            print(client)
            print(request.data)
            serializer = serializers.UserSerializer(
                client, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response({'status': 'User has been updated successfully'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_400_BAD_REQUEST)


class ClientAuthViewset(views.APIView):
    permission_classes = [permissions.AllowAny]
    '''
        Deals with the client authentication. The viewset distinguishes between
        login & logout functionalities using the action parameter.
    '''
    def post(self, request):
        action = request.data.get('action')

        if action == 'login':
            return self.login_user(request)
        elif action == 'logout':
            return self.logout_user(request)
        else:
            return Response({'message': 'Invalid action'}, status=status.HTTP_400_BAD_REQUEST)

    def login_user(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        client = authenticate(request, username=username, password=password)
        if client:
            if client.is_active:
                login(request, user=client)
                token, _ = Token.objects.get_or_create(user=client)
                return Response({'token': token.key}, status=status.HTTP_202_ACCEPTED)
            else:
                return Response({'message': 'The account is deactivated'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def logout_user(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response({'message': 'User logged out successfully'}, status=status.HTTP_200_OK)
