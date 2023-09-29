import smartpy as sp

@sp.module
def main():
    class Fir(sp.Contract):
        def __init__(self):
            self.data.firMap = {}
        
        @sp.entrypoint
        def firDetails(self,params):
            aadhar=params.aadhar
            self.data.firMap[aadhar]=sp.record(
            fname=params.fname,
            lname=params.lname,
            fathersName=params.fathersName,
            age=params.age,
            gender=params.gender,
            PhoneNumber=params.PhoneNumber,
            address=params.address,
            city=params.city,
            state=params.state,
            zip=params.zip,
            doi=params.doi,
            comments=params.comments,
            )
            
@sp.add_test(name="Upload FIR")
def test():
    scenario=sp.test_scenario(main)
    user=sp.test_account("user")
    m1=main.Fir()
    scenario+=m1
    scenario.h1("Creating fir")
    m1.firDetails(
        aadhar='123456789',
        fname='Kavya',
        lname='Reddy',
        fathersName='Venkateswar Reddy',
        age='19',
        gender='Female',
        PhoneNumber='9398556967',
        address='Vinayak nagar',
        city='Hyderabad',
        state='Telangana',
        zip='500032',
        doi='22-09-2023',
        comments='Phone theft',
    )