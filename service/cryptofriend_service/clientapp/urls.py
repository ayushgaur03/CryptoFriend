from django.urls import path
from clientapp.views import ClientRegistrationViewset, ClientDetailsViewset, ClientAuthViewset
from rest_framework.authtoken import views

urlpatterns = [
    path('signup/', ClientRegistrationViewset.as_view()),
    path('clients/', ClientDetailsViewset.as_view()),
    path('auth/', ClientAuthViewset.as_view())
]
