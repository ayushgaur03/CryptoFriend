from django.urls import path
from clientapp.views import ClientRegistrationViewset, ClientDetailsViewset
from rest_framework.authtoken import views

urlpatterns = [
    path('signup/', ClientRegistrationViewset.as_view()),
    path('login/', views.obtain_auth_token),
    path('clients/', ClientDetailsViewset.as_view())
]
