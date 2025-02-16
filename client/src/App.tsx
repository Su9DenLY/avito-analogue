import React from "react";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Header from "@/components/Header";
import AdsList from "@/components/AdsList/AdsList";
import AdDetails from "@/components/AdDetails/AdDetails";
import AdForm from "@/components/AdForm/AdForm";
import {AdItem} from "@/types/adTypes";
import {useState} from "react";
import NotFound from "@/components/NotFound";


function App() {
    const [currentAd, setCurrentAd] = useState<AdItem | null>(null);

    return (
        <Router>
            <div className="lg:w-9/12  mx-auto">
                <Header setCurrentAd={setCurrentAd}/>
                <Routes>
                    <Route path="/" element={<Navigate to="/list" replace/>}/>
                    <Route path="/list" element={<AdsList/>}/>
                    <Route path="/form" element={<AdForm initialData={currentAd}/>}/>
                    <Route path="/item/:id" element={<AdDetails setCurrentAd={setCurrentAd}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
