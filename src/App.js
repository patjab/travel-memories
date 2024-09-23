
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { USA } from './USA';import { Canada } from './Canada';import { Philippines } from './Philippines';import { Malaysia } from './Malaysia';import { Singapore } from './Singapore';import { Vietnam } from './Vietnam';import { Laos } from './Laos';import { Cambodia } from './Cambodia';import { Myanmar } from './Myanmar';import { Thailand } from './Thailand';import { Indonesia } from './Indonesia';import { Brunei } from './Brunei';import { TimorLeste } from './TimorLeste';import { China } from './China';import { Taiwan } from './Taiwan';import { SouthKorea } from './SouthKorea';import { Japan } from './Japan';import { India } from './India';import { Nepal } from './Nepal';import { SriLanka } from './SriLanka';import { Iran } from './Iran';import { Iraq } from './Iraq';import { Oman } from './Oman';import { UAE } from './UAE';import { Qatar } from './Qatar';import { Bahrain } from './Bahrain';import { Turkey } from './Turkey';import { Jordan } from './Jordan';import { Kuwait } from './Kuwait';import { Russia } from './Russia';import { UK } from './UK';import { Germany } from './Germany';import { Austria } from './Austria';import { Hungary } from './Hungary';import { SaudiArabia } from './SaudiArabia';import { France } from './France';import { Belgium } from './Belgium';import { Netherlands } from './Netherlands';import { Ireland } from './Ireland';import { Uzbekistan } from './Uzbekistan';import { Kyrgyzstan } from './Kyrgyzstan';import { Kazakhstan } from './Kazakhstan';import { Portugal } from './Portugal';import { Tunisia } from './Tunisia';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/usa" className="nav-link">🇺🇸 USA</Link></li>
            <li><Link to="/canada" className="nav-link">🇨🇦 Canada</Link></li>
            <li><Link to="/philippines" className="nav-link">🇵🇭 Philippines</Link></li>
            <li><Link to="/malaysia" className="nav-link">🇲🇾 Malaysia</Link></li>
            <li><Link to="/singapore" className="nav-link">🇸🇬 Singapore</Link></li>
            <li><Link to="/vietnam" className="nav-link">🇻🇳 Vietnam</Link></li>
            <li><Link to="/laos" className="nav-link">🇱🇦 Laos</Link></li>
            <li><Link to="/cambodia" className="nav-link">🇰🇭 Cambodia</Link></li>
            <li><Link to="/myanmar" className="nav-link">🇲🇲 Myanmar</Link></li>
            <li><Link to="/thailand" className="nav-link">🇹🇭 Thailand</Link></li>
            <li><Link to="/indonesia" className="nav-link">🇮🇩 Indonesia</Link></li>
            <li><Link to="/brunei" className="nav-link">🇧🇳 Brunei</Link></li>
            <li><Link to="/timorleste" className="nav-link">🇹🇱 Timor Leste</Link></li>
            <li><Link to="/china" className="nav-link">🇨🇳 China</Link></li>
            <li><Link to="/taiwan" className="nav-link">🇹🇼 Taiwan</Link></li>
            <li><Link to="/southkorea" className="nav-link">🇰🇷 South Korea</Link></li>
            <li><Link to="/japan" className="nav-link">🇯🇵 Japan</Link></li>
            <li><Link to="/india" className="nav-link">🇮🇳 India</Link></li>
            <li><Link to="/nepal" className="nav-link">🇳🇵 Nepal</Link></li>
            <li><Link to="/srilanka" className="nav-link">🇱🇰 Sri Lanka</Link></li>
            <li><Link to="/iran" className="nav-link">🇮🇷 Iran</Link></li>
            <li><Link to="/iraq" className="nav-link">🇮🇶 Iraq</Link></li>
            <li><Link to="/oman" className="nav-link">🇴🇲 Oman</Link></li>
            <li><Link to="/uae" className="nav-link">🇦🇪 UAE</Link></li>
            <li><Link to="/qatar" className="nav-link">🇶🇦 Qatar</Link></li>
            <li><Link to="/bahrain" className="nav-link">🇧🇭 Bahrain</Link></li>
            <li><Link to="/turkey" className="nav-link">🇹🇷 Turkey</Link></li>
            <li><Link to="/jordan" className="nav-link">🇯🇴 Jordan</Link></li>
            <li><Link to="/kuwait" className="nav-link">🇰🇼 Kuwait</Link></li>
            <li><Link to="/russia" className="nav-link">🇷🇺 Russia</Link></li>
            <li><Link to="/uk" className="nav-link">🇬🇧 UK</Link></li>
            <li><Link to="/germany" className="nav-link">🇩🇪 Germany</Link></li>
            <li><Link to="/austria" className="nav-link">🇦🇹 Austria</Link></li>
            <li><Link to="/hungary" className="nav-link">🇭🇺 Hungary</Link></li>
            <li><Link to="/saudiarabia" className="nav-link">🇸🇦 Saudi Arabia</Link></li>
            <li><Link to="/france" className="nav-link">🇫🇷 France</Link></li>
            <li><Link to="/belgium" className="nav-link">🇧🇪 Belgium</Link></li>
            <li><Link to="/netherlands" className="nav-link">🇳🇱 Netherlands</Link></li>
            <li><Link to="/ireland" className="nav-link">🇮🇪 Ireland</Link></li>
            <li><Link to="/uzbekistan" className="nav-link">🇺🇿 Uzbekistan</Link></li>
            <li><Link to="/kyrgyzstan" className="nav-link">🇰🇬 Kyrgyzstan</Link></li>
            <li><Link to="/kazakhstan" className="nav-link">🇰🇿 Kazakhstan</Link></li>
            <li><Link to="/portugal" className="nav-link">🇵🇹 Portugal</Link></li>
            <li><Link to="/tunisia" className="nav-link">🇹🇳 Tunisia</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/usa" element={<USA />} /><Route path="/canada" element={<Canada />} /><Route path="/philippines" element={<Philippines />} /><Route path="/malaysia" element={<Malaysia />} /><Route path="/singapore" element={<Singapore />} /><Route path="/vietnam" element={<Vietnam />} /><Route path="/laos" element={<Laos />} /><Route path="/cambodia" element={<Cambodia />} /><Route path="/myanmar" element={<Myanmar />} /><Route path="/thailand" element={<Thailand />} /><Route path="/indonesia" element={<Indonesia />} /><Route path="/brunei" element={<Brunei />} /><Route path="/timorleste" element={<TimorLeste />} /><Route path="/china" element={<China />} /><Route path="/taiwan" element={<Taiwan />} /><Route path="/southkorea" element={<SouthKorea />} /><Route path="/japan" element={<Japan />} /><Route path="/india" element={<India />} /><Route path="/nepal" element={<Nepal />} /><Route path="/srilanka" element={<SriLanka />} /><Route path="/iran" element={<Iran />} /><Route path="/iraq" element={<Iraq />} /><Route path="/oman" element={<Oman />} /><Route path="/uae" element={<UAE />} /><Route path="/qatar" element={<Qatar />} /><Route path="/bahrain" element={<Bahrain />} /><Route path="/turkey" element={<Turkey />} /><Route path="/jordan" element={<Jordan />} /><Route path="/kuwait" element={<Kuwait />} /><Route path="/russia" element={<Russia />} /><Route path="/uk" element={<UK />} /><Route path="/germany" element={<Germany />} /><Route path="/austria" element={<Austria />} /><Route path="/hungary" element={<Hungary />} /><Route path="/saudiarabia" element={<SaudiArabia />} /><Route path="/france" element={<France />} /><Route path="/belgium" element={<Belgium />} /><Route path="/netherlands" element={<Netherlands />} /><Route path="/ireland" element={<Ireland />} /><Route path="/uzbekistan" element={<Uzbekistan />} /><Route path="/kyrgyzstan" element={<Kyrgyzstan />} /><Route path="/kazakhstan" element={<Kazakhstan />} /><Route path="/portugal" element={<Portugal />} /><Route path="/tunisia" element={<Tunisia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
