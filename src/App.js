import { ThemeProvider } from "./context/Themes";
import { LoaderProvider } from "./context/Preloader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overview, Documentation, ChangeLog, Error } from "./pages/supports";
import { Avatars, Alerts, Buttons, Charts, Tables, Fields, Headings, Colors } from "./pages/blocks";
import { Ecommerce, Analytics, CRM, ForgotPassword, Register, Login, UserList, UserProfile, MyAccount, 
    ProductList, ProductView, ProductUpload, InvoiceList, InvoiceDetails, OrderList, Message, 
    Notification, BlankPage, Settings } from "./pages/master";

export default function App() {
    return (
        <ThemeProvider>
            <LoaderProvider>
                <BrowserRouter>
                    <Routes>
                        {/* master Pages */}
                        <Route path="/hotash/ecommerce" element={<Ecommerce /> } />
                        <Route path="/hotash/analytics" element={<Analytics /> } />
                        <Route path="/hotash/crm" element={<CRM /> } />
                        <Route path="/hotash/login" element={<Login />} />
                        <Route path="/hotash/register" element={<Register />} />
                        <Route path="/hotash/forgot-password" element={<ForgotPassword />} />
                        <Route path="/hotash/user-list" element={<UserList />} />
                        <Route path="/hotash/user-profile" element={<UserProfile />} />
                        <Route path="/hotash/my-account" element={<MyAccount />} />
                        <Route path="/hotash/product-list" element={<ProductList />} />
                        <Route path="/hotash/product-view" element={<ProductView />} />
                        <Route path="/hotash/product-upload" element={<ProductUpload />} />
                        <Route path="/hotash/invoice-list" element={<InvoiceList />} />
                        <Route path="/hotash/invoice-details" element={<InvoiceDetails />} />
                        <Route path="/hotash/order-list" element={<OrderList />} />
                        <Route path="/hotash/message" element={<Message />} />
                        <Route path="/hotash/notification" element={<Notification />} />
                        <Route path="/hotash/settings" element={<Settings />} />
                        <Route path="/hotash/blank-page" element={<BlankPage />} />

                        {/* Blocks Pages */} 
                        <Route path="/hotash/headings" element={<Headings />} />
                        <Route path="/hotash/buttons" element={<Buttons />} />
                        <Route path="/hotash/avatars" element={<Avatars />} />
                        <Route path="/hotash/colors" element={<Colors />} />
                        <Route path="/hotash/charts" element={<Charts />} />
                        <Route path="/hotash/tables" element={<Tables />} />
                        <Route path="/hotash/fields" element={<Fields />} />
                        <Route path="/hotash/alerts" element={<Alerts />} />

                        {/* Supports Pages */}
                        <Route path="*" element={<Error />} />
                        <Route path="/hotash" element={<Overview />} />
                        <Route path="/hotash/documentation" element={<Documentation />} />
                        <Route path="/hotash/changelog" element={<ChangeLog />} />
                    </Routes>
                </BrowserRouter>
            </LoaderProvider>
        </ThemeProvider>
    );
}

