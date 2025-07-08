import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./containers/Dashboard/Dashboard";
import Header from "./components/Layout/Header";
import Inventory from "./containers/Inventory/Inventory";
import Shipment from "./containers/Shipment/Shipment";
import Order from "./containers/Orders/Order";
import Customer from "./containers/Customers/Customer";
import ShipmentTracker from "./containers/Shipment/Tracking";
// import NoPageAvailable from "./containers/PageNotFound";
import LoginForm from "./components/Auth/Login/LoginPanel";
import Stepper from "./components/Stepper";
import ForgetStepper from "./components/Auth/ForgetPassword/Stepper";
import ResetSuccess from "./components/Auth/ForgetPassword/ResetSuccess";
import { AnimatePresence } from "framer-motion";
import Successful from "./components/Auth/SignUp/Succesfull";
import EditInventory from "./containers/Inventory/EditInventory";
import RestockProduct from "./containers/Inventory/RestockProduct";
import OrderDetails from "./containers/Orders/OrderDetails";
import Refunds from "./containers/Refunds/Refunds";
import Subscription from "./containers/Subscription/Subscription";
import Notifications from "./containers/Notifications/Notifications";
import RefundRequest from "./containers/Refunds/RefundRequest";
import SalesPersonnel from './containers/SalesPersonnel/SalesPersonnel'
import Support from "./containers/Support/Support";
import Settings from "./containers/Settings/Settings";
const AnimatedRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* Route for Login */}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forget/*" element={<ForgetStepper />} />
                <Route path="/signup/*" element={<Stepper />} /> {/* Updated */}
                <Route path="/resetSuccesful" element={<ResetSuccess />} />
                <Route path="/success" element={<Successful />} />

                {/* Default Route Redirect */}
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* Routes with Layout */}
                <Route
                    path="/*"
                    element={
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 flex flex-col md:ml-[20vw]">
                                <Header />
                                <div className="content">
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/inventory" element={<Inventory />} />
                                        <Route path="/shipment" element={<Shipment />} />
                                        <Route path="/orders" element={<Order />} />
                                        <Route path="/orders/details" element={<OrderDetails />} />
                                        <Route path="/customers" element={<Customer />} />
                                        <Route path="/shipment/tracking" element={<ShipmentTracker />} />
                                        {/* <Route path="/settings" element={<NoPageAvailable />} /> */}
                                        <Route path='inventory/restock' element={<RestockProduct/>}/>
                                        <Route path='inventory/edit-inventory' element={<EditInventory/>}/>
                                        <Route path='return-refunds' element={<Refunds/>}/>
                                        <Route path='return-refunds/refund-request' element={<RefundRequest/>}/>
                                        <Route path='sales-personnel' element={<SalesPersonnel/>}/>
                                        <Route path='notifications' element={<Notifications/>}/>
                                        <Route path='subscription' element={<Subscription/>}/>
                                        <Route path='/support' element={<Support/>}/>
                                        <Route path='/settings' element={<Settings/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRouter;
