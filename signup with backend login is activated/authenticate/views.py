# from curses.ascii import US
import email
from email.errors import MessageError
import imp
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate , login
from .models import webadmin
import authenticate


# Create your views here.
def home(request):
    return render(request , "authenticate/index.html")

def signup(request):

    if(request.method =="POST"):
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        email= request.POST["email"]
        password = request.POST["password"]
        confirmpassword = request.POST["confirmpassword"]

        user = webadmin(admin_fname = fname , admin_lname = lname 
        , admin_email = email , admin_password = password)

        # myuser =  User.objects.create_user(email,email,password)
        # myuser.first_name = fname
        # myuser.last_name = lname
        # myuser.save()
        user.save()
        messages.success(request , "Account Created.")

        return redirect('home')

    return render(request , "authenticate/index.html")





def login(request):
    if(request.method =="POST"):
        email_= request.POST["email"]
        password_ = request.POST["password"]

        if webadmin.objects.filter(admin_email = email_).exists():

                rest=webadmin.objects.get(admin_email = email_ )
                if rest.admin_password  == password_ :
                     return redirect('home')
                else:
                    messages.error(request , "Not a valid user")
            
        else:
            messages.error(request , "Not a valid user")

    return render(request , "authenticate/join.html")   
    
        

def join(request):
    return render(request , "authenticate/join.html")

def forum(request):
    return render(request , "authenticate/forum.html")