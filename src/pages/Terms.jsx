import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import termsHeader from "../assets/images/aliane-schwartzhaupt-QdmUva6qBTk-unsplash.jpg";
import { Box, Text, Center } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="terms" style={{ overflow: "hidden" }}>
      <Navbar />
      <Header
        headerImage={termsHeader}
        headerText="#OurTerms"
        className="header"
      />
      <Center mt="2rem" mb="2rem">
        <Box p={4} maxWidth="800px" width="100%">
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            These terms and conditions ("Terms") govern your use of the website
            operated by Reels N Reels studio ("we," "our," or "us"), located at
            reelsnreels.com, and any services, content, features, or
            functionality offered through the website. By accessing or using our
            website, you agree to be bound by these Terms. If you do not agree
            with these Terms, please do not use our website.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            1. Use of the Website
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            1.1 You must meet the legal age requirements to use our website. If
            you do not meet the legal age requirement, you may only use the
            website under the supervision of a parent or legal guardian. It is
            your responsibility to ensure that you are complying with the
            applicable age restrictions in your jurisdiction.
            <br /> 1.2 You agree to use the website only for lawful purposes and
            in a manner that does not infringe upon or violate the rights of any
            third party.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            2. Intellectual Property
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            2.1 All content available on the website, including but not limited
            to text, graphics, images, videos, audio, and software, is the
            property of Reels N Reels studio or its licensors and is protected
            by intellectual property laws.
            <br /> 2.2 You may not use, reproduce, distribute, modify, or create
            derivative works of any content from the website without our prior
            written consent.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            3. User-Generated Content
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            3.1 Any content you submit to the website, including comments,
            reviews, and feedback, grants us a non-exclusive, royalty-free,
            perpetual, irrevocable, and worldwide license to use, reproduce,
            distribute, modify, and display such content.
            <br /> 3.2 You are solely responsible for the content you submit,
            and it must not be offensive, misleading, infringing, or violate any
            applicable laws or regulations.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            4. Privacy Policy
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            4.1 Our Privacy Policy outlines how we collect, use, and protect
            your personal information. By using the website, you consent to the
            practices described in our Privacy Policy.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            5. Links to Third-Party Websites
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            5.1 Our website may contain links to third-party websites. These
            links are provided for your convenience, but we do not endorse or
            have control over the content, services, or practices of these
            websites. Your interactions with third-party websites are at your
            own risk.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            6. Disclaimers
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            6.1 The content on the website is provided "as is" and without
            warranties of any kind, either express or implied. We do not warrant
            the accuracy, reliability, or completeness of any content on the
            website.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            7. Limitation of Liability
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            7.1 To the fullest extent permitted by law, we shall not be liable
            for any direct, indirect, incidental, consequential, special, or
            punitive damages arising out of or in connection with your use of
            the website.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            8. Indemnification
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            8.1 You agree to indemnify and hold Reels N Reels studio and its
            affiliates, officers, directors, employees, and agents harmless from
            any claims, damages, losses, liabilities, costs, and expenses,
            including attorney's fees, arising out of your use of the website or
            violation of these Terms.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            9. Modifications and Termination
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            9.1 We reserve the right to modify, suspend, or terminate the
            website or any portion of it at any time without notice.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            10. Governing Law
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            10.1 These Terms shall be governed by and construed in accordance
            with the laws of India. Any disputes arising from these Terms or
            your use of the website shall be subject to the exclusive
            jurisdiction of the courts located in Bhubaneswar, India.
          </Text>
          <Text fontWeight="bold" fontSize="1rem" mb={0.5}>
            11. Contact Us
          </Text>
          <Text fontWeight="medium" fontSize="1rem" mb={1}>
            11.1 If you have any questions about these Terms, please contact us
            at contact@reelsnreels.com . By using our website, you acknowledge
            that you have read, understood, and agreed to these Terms.
          </Text>
        </Box>
      </Center>
      <Footer />
    </div>
  );
};

export default Terms;
