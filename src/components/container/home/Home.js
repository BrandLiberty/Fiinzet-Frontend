import {useEffect} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../../context/UserAuthContext";
import "../../assets/css/thanks.css"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>

      <div className="main ">
        <section className="section mt-5 pt-4 pb-5 contact-div adj-height">
          <div className="container thanks">
            <div className="card shadow">
              <div className="card-body">
                <div className="p-4 box1 mt-3 text-center">
                  <h3>Thank you for submitting the form! A loan expert will contact you soon. </h3> <br />
                  {user && user.email}
                </div>
                <div className="d-grid gap-2">
                  <Button variant="primary" onClick={handleLogout}>
                    Close
                  </Button>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Home;


