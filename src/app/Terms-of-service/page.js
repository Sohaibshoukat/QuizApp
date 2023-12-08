import React from 'react'

const page = () => {
    const Data=[
        {
          "title": "Acceptance of Terms",
          "description": "My Benefits Guardian (“MBG”) provides its services to you, subject to the following Terms of Service (“TOS”) which may be updated by us from time to time without notice to you. Your use of MBG’s services constitutes your agreement to all such Terms."
        },
        {
          "title": "Description of Services",
          "description": "MBG provides users with access to a variety of services, including but not limited to, assistance with finding consumers affordable healthcare options and providing access to other valuable resources and tools to help consumers save."
        },
        {
          "title": "Registration",
          "description": "In order to use MBG’s paid services or memberships, you must register with an account. You agree to provide accurate, current and complete information about yourself. MBG reserves the right to suspend or terminate your account if any information provided by you is inaccurate or incomplete."
        },
        {
          "title": "Proprietary Rights",
          "description": "You acknowledge that all content, including but not limited to text, software, music, sound, photographs, graphics, video, messages, or other materials appearing on MBG’s services, are owned by MBG or its licensors and are protected by applicable intellectual property and other laws. You agree not to reproduce, redistribute, sell, create derivative works, or exploit any content without the express written consent of MBG."
        },
        {
          "title": "Limitations on Use",
          "description": "You agree not to use MBG’s services in any manner that is unlawful, harmful to MBG, or in any way that could damage, disable, overburden, or impair MBG’s services."
        },
        {
          "title": "Termination",
          "description": "You agree that MBG may, in its sole discretion, terminate or suspend your access to all or part of MBG’s services with or without notice and for any reason, including, without limitation, for lack of use or if MBG believes that you have violated or acted inconsistently with the letter or spirit of the TOS. Any such termination or suspension may be without prior notice."
        },
        {
          "title": "Disclaimer of Warranties",
          "description": "You expressly agree that use of MBG’s services is at your sole risk. MBG’s services are provided on an “as is” and “as available” basis. MBG expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement."
        },
        {
          "title": "Limitation of Liability",
          "description": "You agree that MBG shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if MBG has been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the services; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information, or services purchased or obtained or messages received or transactions entered into through or from the services; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the services; (v) or any other matter relating to the services."
        },
        {
          "title": "Indemnification",
          "description": "You agree to indemnify and hold MBG and its subsidiaries, affiliates, officers, agents, and other partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of MBG’s services in violation of these TOS and/or arising from a breach of these TOS and/or any breach of your representations and warranties set forth above."
        },
        {
          "title": "Miscellaneous",
          "description": "These TOS constitute the entire agreement between you and MBG and govern your use of MBG’s services. These TOS supersede any prior agreements between you and MBG with respect to the services. You also may be subject to additional terms and conditions that may apply when you use or purchase certain other MBG services, affiliate services, third-party content or third-party software. The failure of MBG to exercise or enforce any right or provision of the TOS shall not constitute a waiver of such right or provision. If any provision of the TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of MBG’s services or the TOS must be filed within one (1) year after such claim or cause of action arose or be forever barred. The section titles in the TOS are for convenience only and have no legal or contractual effect."
        }
      ]
  return (
    <>
    <div className="LegalHead">
        <h1>Terms Of Service</h1>
        <h4>My Benefits Guardian: Last Updated: 5-12-2023</h4>
    </div>
    <div className="DataSetSection">
        <ol>
            {Data.map((item,index)=>(
                <div className='DataIn' key={index}>
                <li>{item.title}</li>
                <p>{item.description}</p>
                </div>
            ))}
        </ol>
    </div>
    
    </>
  )
}

export default page