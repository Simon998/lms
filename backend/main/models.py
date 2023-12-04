from django.db import models

# Create your models here.
# Teacher(Instructor) model

class Instructor(models.Model):
    
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_number= models.CharField(max_length=20)
    skills= models.TextField()

    class Meta:
        verbose_name_plural = "1. Instructors"


# CourseCategory model

class CourseCategory(models.Model):
    title = models.CharField(max_length=100)
    description= models.TextField()
    class Meta:
        verbose_name_plural = "2. Course Categories"
# Cousre model 

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "3. Courses"

# Student model

class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_number= models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()

    
    class Meta:
        verbose_name_plural = "4. Students"
