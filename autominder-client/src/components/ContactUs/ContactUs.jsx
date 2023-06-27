import classes from './ContactUs.module.scss' 
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

  

const ContactUs = () => { 
  
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div className = {classes['Elements']}>
        <p className = {classes['Elements2']}><strong>Privacy Policy</strong></p>
        <p className = {classes['Elements0']}>
          Autominder Tech built the Autominder app as
          a Free app. This SERVICE is provided by
          Autominder Tech at no cost and is intended for use as
          is.
        </p> 
        <p className = {classes['Elements0']}>
          This page is used to inform visitors regarding our
          policies with the collection, use, and disclosure of Personal
          Information if anyone decided to use our Service.
        </p> 
        <p className = {classes['Elements0']}>
          If you choose to use our Service, then you agree to
          the collection and use of information in relation to this
          policy. The Personal Information that we collect is
          used for providing and improving the Service. We will not use or share your information with
          anyone except as described in this Privacy Policy.
        </p> 
        <p className = {classes['Elements0']}>
          The terms used in this Privacy Policy have the same meanings
          as in our Terms and Conditions, which are accessible at
          Autominder unless otherwise defined in this Privacy Policy.
        </p> 
        <p className = {classes['Elements2']}><strong>Information Collection and Use</strong></p>
        
        <p className = {classes['Elements0']}>
          For a better experience, while using our Service, we
          may require you to provide us with certain personally
          identifiable information, including but not limited to email, device data (location and bluetooth permissions), user vehicle information, such as: vehicle VIN, brand of the vehicle, model of the vehicle, year of the vehicle, kilometrage of the vehicle and basic maintenance info of the vehicle (last dates of maintenance performed in the car). The information that
          we request will be retained by us and used as described in this privacy policy.
        </p> 
        
        <div><p className = {classes['Elements0']}>
            The app does use third-party services that may collect
            information used to identify you.
          </p> <p className = {classes['Elements0']}>
            Link to the privacy policy of third-party service providers used
            by the app
          </p> <ul><li><a className = {classes['Elements0']} href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}{/**/}</ul></div> 
          <p className = {classes['Elements2']}><strong>Log Data</strong></p> 
          <p className = {classes['Elements0']}>
          We want to inform you that whenever you
          use our Service, in a case of an error in the app
          we collect data and information (through third-party
          products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol
          (“IP”) address, device name, operating system version, the
          configuration of the app when utilizing our Service,
          the time and date of your use of the Service, and other
          statistics.
        </p> <p className = {classes['Elements2']}><strong>Cookies</strong></p> 
        <p className = {classes['Elements0']}>
          Cookies are files with a small amount of data that are
          commonly used as anonymous unique identifiers. These are sent
          to your browser from the websites that you visit and are
          stored on your device's internal memory.
        </p> 
        <p className = {classes['Elements0']}>
          This Service does not use these “cookies” explicitly. However,
          the app may use third-party code and libraries that use
          “cookies” to collect information and improve their services.
          You have the option to either accept or refuse these cookies
          and know when a cookie is being sent to your device. If you
          choose to refuse our cookies, you may not be able to use some
          portions of this Service.
        </p>
         <p className = {classes['Elements2']}><strong>Service Providers</strong></p> 
         <p className = {classes['Elements0']}>
          We may employ third-party companies and
          individuals due to the following reasons:
        </p> 
        <ul>
        <li className = {classes['Elements0']}>To facilitate our Service;</li> 
        <li className = {classes['Elements0']}>To provide the Service on our behalf;</li>
        <li className = {classes['Elements0']}>To perform Service-related services; or</li> 
        <li className = {classes['Elements0']}>To assist us in analyzing how our Service is used.</li></ul>
         <p className = {classes['Elements0']}>
          We want to inform users of this Service
          that these third parties have access to their Personal
          Information. The reason is to perform the tasks assigned to
          them on our behalf. However, they are obligated not to
          disclose or use the information for any other purpose.
        </p> <p className = {classes['Elements2']}><strong>Security</strong></p> 
        <p className = {classes['Elements0']}>
          We value your trust in providing us your
          Personal Information, thus we are striving to use commercially
          acceptable means of protecting it. But remember that no method
          of transmission over the internet, or method of electronic
          storage is 100% secure and reliable, and we cannot
          guarantee its absolute security.
        </p> <p className = {classes['Elements2']}><strong>Links to Other Sites</strong></p> 
        <p className = {classes['Elements0']}>
          This Service may contain links to other sites. If you click on
          a third-party link, you will be directed to that site. Note
          that these external sites are not operated by us.
          Therefore, we strongly advise you to review the
          Privacy Policy of these websites. We have
          no control over and assume no responsibility for the content,
          privacy policies, or practices of any third-party sites or
          services.
        </p> <p className = {classes['Elements2']}><strong>Children’s Privacy</strong></p> 
        <div>
        <p className = {classes['Elements0']}>
            These Services do not address anyone under the age of 13.
            We do not knowingly collect personally
            identifiable information from children under 13 years of age. In the case
            we discover that a child under 13 has provided
            us with personal information, we immediately
            delete this from our servers. If you are a parent or guardian
            and you are aware that your child has provided us with
            personal information, please contact us so that
            we will be able to do the necessary actions.
          </p></div> {/**/} <p className = {classes['Elements2']}><strong>Changes to This Privacy Policy</strong></p>
           <p className = {classes['Elements0']}>
          We may update our Privacy Policy from
          time to time. Thus, you are advised to review this page
          periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on
          this page.
        </p> <p className = {classes['Elements0']}>This policy is effective as of 2023-06-22</p> 
        <p className = {classes['Elements2']}><strong>Contact Us</strong></p> 
        <p className = {classes['Elements0']}>
          If you have any questions or suggestions about our
          Privacy Policy, do not hesitate to contact us at proyectoprgmmovil@gmail.com and https://autominder.tech.
        </p> <p className = {classes['Elements0']}>This privacy policy page was created at <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net </a>and modified/generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
      </div>
    );
  }


export default ContactUs;