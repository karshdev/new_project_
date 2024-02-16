import Layout from '@/components/Layout'
import React from 'react'
const getData=async(id)=>{
try{
const response = await fetch(
  `${process.env.NEXTAUTH_URL}/api/getChalisa/${id}`,
);
const res = await response.json();
if (res) {
  return res;
} else {
  throw new Error("Errors from backend");
}
}catch(err){

  return false;
}
}
const page = async({params}) => {
  const data = await getData(params.id);
  if(!data){
    throw new error("Something Went Wrong")
  }
 const formattedChalisa = data && data.chalisa.split(/\n\s*\n/).map((stanza, index) => (
   <div key={index} className="mb-4">
     <p className="text-[16px] sm:text-[15px] leading-[1.5]">{stanza.trim()}</p>
   </div>
 ));
  return (
    <Layout>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center relative"
        style={{ backgroundImage: `url("${data.image}")`,zIndex:-1 }}
      >
        <div className="max-w-4xl px-6 py-10 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white">
          {formattedChalisa}
        </div>
      </div>
    </Layout>
  );
}

export default page
