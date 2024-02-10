import Layout from '@/Components/Layout'
import React from 'react'

const page = () => {
  const hanumanChalisaText = `श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।
बरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥

बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुधि विद्या देहु मोहि, हरहु कलेस विकार॥

जय हनुमान ज्ञान गुन सागर।
जय कपीस तिहुँलोक उजागर॥

राम दूत अतुलित बल धामा।
अंजनि-पुत्र पवनसुत नामा॥

महाबीर बिक्रम बजरंगी।
कुमति निवार सुमति कें संगी॥

कंचन बरन बिराज सुबेसा।
कानन कुण्डल कुंचित केसा॥

हाथ वज्र औ ध्वजा विराजै।
कांधे मूँज जनेउ साजै॥

शंकर सुवन केसरी नंदन।
तेज प्रताप महा जग वंदन॥

विद्यावान गुनी अति चातुर।
राम काज करिबे को आतुर॥

प्रभु चरित्र सुनिबे को रसिया।
राम लखन सीता मन बसिया॥

सूक्ष्म रूप धरि सियहिं दिखावा।
विकट रूप धरि लंक जरावा॥

भीम रूप धरि असुर संहारे।
रामचंद्र के काज संवारे॥

लाय सजीवन लखन जियाये।
श्रीरघुवीर हरषि उर लाये॥

रघुपति कीन्ही बहुत बड़ाई।
तुम मम प्रिय भरतहि सम भाई॥

सहस बदन तुम्हरो जस गावैं।
अस कहि श्रीपति कंठ लगावैं॥

सनकादिक ब्रह्मादिमुनीसा।
नारद सारद सहित अहीसा॥

यम कुबेर दिगपाल जहां ते।
कवि कोविद कहि सकै कहां ते॥

तुम उपकार सुग्रीवहि कीन्हा।
राम मिलाय राजपद दीन्हा॥

तुम्हरो मंत्र विबीषन माना।
लंकेश्वर भये सब जग जाना॥

जुग सहस्र जोजन पर भानू।
लील्यो ताहि मधुर फल जानू॥

प्रभु मुद्रिका मेलि मुख माहीं।
जलधि लाँघि गये अचरज नाहीं॥

दुर्गम काज जगत के जेते।
सुगम अनुग्रह तुम्हरे तेते॥

राम दुआरे तुम रखवारे।
होत न आज्ञा बिनु पैसारे॥

सब सुख लहै तुम्हारी सरना।
तुम रक्षक काहू को डर ना॥

आपन तेज सम्हारो आपै।
तीनों लोक हाँक तें काँपै॥

भूत पिशाच निकट नहिं आवै।
महाबीर जब नाम सुनावै॥

नासै रोग हरे सब पीरा।
जपत निरंतर हनुमत बीरा॥

संकट तें हनुमान छुड़ावै।
मन क्रम बचन ध्यान जो लावै॥

सब पर राम तपस्वी राजा।
तिन के काज सकल तुम साजा॥

और मनोरथ जो कोई लावै।
सोई अमित जीवन फल पावै॥

चारों जुग परताप तुम्हारा।
है परसिद्ध जगत उजियारा॥

साधु संत के तुम रखवारे।
असुर निकंदन राम दुलारे॥

अष्टसिद्धि नौ निधि के दाता।
अस बर दीन्ह जानकी माता॥

राम रसायन तुम्हरे पासा।
सादा रहो रघुपति के दासा॥

तुम्हरे भजन राम को पावै।
जनम-जनम के दुख बिसरावै॥

अंत काल रघुबर पुर जाई।
जहाँ जन्म हरि-भक्त कहाई॥

और देवता चित्त न धरई।
हनुमत सेई सर्व सुख करई॥

संकट कटै मिटै सब पीरा।
जो सुमिरै हनुमत बलबीरा॥

जय जय जय हनुमान गोसाईं।
कृपा करहु गुरुदेव की नाईं॥

जो शत बार पाठ कर कोई।
छूटहि बंदि महासुख होई॥

जो यह पढ़ै हनुमान चालीसा।
होय सिद्धि साखी गौरीसा॥

तुलसीदास सदा हरि चेरा।
कीजै नाथ हृदय महँ डेरा॥

दोहा
पवन तनय संकट हरण मंगल मूरति रूप।
राम लखन सीता सहित हृदय बसहु सुरभूप॥
`;
 const formattedChalisa = hanumanChalisaText
   .split(/\n\s*\n/)
   .map((stanza, index) => (
     <div key={index} className="mb-4">
       <p className="text-[16px] sm:text-[15px] leading-[1.5]">
         {stanza.trim()}
       </p>
     </div>
   ));
  return (
    <Layout>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center relative"
        style={{ backgroundImage: `url("/hanumanJi.webp")` }}
      >
        <div className="max-w-4xl px-6 py-10 bg-black bg-opacity-70 rounded-lg flex flex-col justify-center items-center text-white">
          {formattedChalisa}
        </div>
      </div>
    </Layout>
  );
}

export default page
