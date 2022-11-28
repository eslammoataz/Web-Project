from django.db import models


# Create your models here.

class webadmin(models.Model):
     admin_fname = models.CharField(max_length=50)
     admin_lname = models.CharField(max_length=50)
     admin_email = models.CharField(max_length=50)
     admin_password = models.CharField(max_length=50)

     def __str__(self):  
        return self.admin_fname

class student(models.Model):
    studentname = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    student_id=models.CharField(max_length=50)
    gpa=models.CharField(max_length=3)
    mob=models.CharField(max_length=11)
    password=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    gender=models.CharField(max_length=6)
    activation=models.CharField(max_length=10)


    def str(self):
        return self.student_id



    class Meta:
        verbose_name='FCAI_students'

    class Meta:
        ordering = ['student_id']
