from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import InstructorSerializer
from . import models
from rest_framework import generics
from rest_framework import permissions

# Create your views here.

class InstructorList(generics.ListCreateAPIView):
    queryset=models.Instructor.objects.all()
    serializer_class=InstructorSerializer
    permission_classes = [permissions.IsAuthenticated]

class InstructorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Instructor.objects.all()
    serializer_class=InstructorSerializer
    permission_classes = [permissions.IsAuthenticated]

