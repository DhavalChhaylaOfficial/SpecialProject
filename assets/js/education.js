AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "AWS Certified Cloud Practitioner",
    cardImage: "assets/images/aws-certified-cloud-practitioner.png",
    moocLink: "https://www.credly.com/badges/a26c4648-79a8-498f-bc7a-8d2ba304179b/linked_in_profile",
  },
  {
    title: " Introduction to Cloud 101",
    cardImage: "assets/images/aws2.png",
    moocLink: "https://www.credly.com/badges/f4512889-64a6-453f-9605-3dc23769c181/public_url",
  },
  {
    title: "Azure AI Fundamentals",
    cardImage: "assets/images/ms.png",
    moocLink: "https://www.credly.com/badges/64a39946-90a5-42ab-a995-73d3d21299bc/public_url",
  },
  {
    title: "Postman API Fundamentals",
    cardImage: "https://media.badgr.com/uploads/badges/assertion-posjjVFfSBu7SpHoAR9tiQ.png",
    moocLink: "https://badgr.com/public/assertions/posjjVFfSBu7SpHoAR9tiQ?identity__email=chhayladhaval26@gmail.com",
  },

  {
    title: "Cloud Computing Core",
    cardImage: "assets/images/cc.png",
    moocLink:
      "https://www.credly.com/badges/f285c0b1-512a-40cd-93d2-e3e32198a60c/public_url",
  },

  {
    title: "DevOps Essentials",
    cardImage: "assets/images/dev.png",
    moocLink: "https://www.credly.com/badges/f4aab39b-b8b8-402d-bd4b-9eb373b59ddf/public_url",
  },

  {
    title: "Cloud Data Management Foundations Associate",
    cardImage: "assets/images/a.png",
    moocLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3BE1C1A59B4D33FD396E692A0629A314921528D4CFF87590E76872FD225BBD50",
  },
  {
    title: "Cloud Infrastructure Foundations Associate",
    cardImage: "assets/images/a.png",
    moocLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C8E540805E6AF9028F374C2446049247CEFD5D0F69DAE3ADF1F40F5439D00708",
  },

  {
    title: "Serverless Computing with AWS Lambda",
    cardImage: "https://media.licdn.com/dms/image/C4D0BAQFCJgcvjvHrkw/company-logo_200_200/0/1630527418864/internshala_trainings_logo?e=1720656000&v=beta&t=Yh8jZK3SVf3Hc-ZFHcnct1dHBUmfopN5Cf58qziiMOg",
    moocLink: "https://trainings.internshala.com/s/v/3262021/1fdd0e52",
  },

  {
    title: "Cloud Computing",
    cardImage: "assets/images/n.jpg",
    moocLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS89S63110033420137901",
  },

  {
    title: "Git and GitHub Essentials",
    cardImage: "assets/images/git.png",
    moocLink: "https://www.credly.com/badges/c79e903f-2417-4e70-a864-789b78a72684/public_url",
  },

  {
    title: "Introduction to Web Development",
    cardImage: "assets/images/web.png",
    moocLink: "https://www.credly.com/badges/a6939a9b-2f9b-48d1-a9f8-7c22c9bdd0fc/public_url",
  },
  

  {
    title: "Cybersecurity Fundamentals",
    cardImage: "assets/images/ibm.png",
    moocLink: "https://www.credly.com/badges/b2e48e06-55c3-4ff5-8559-c02597152dde/public_url",
  },
  {
    title: "Introduction to the Threat Landscape 1.0",
    cardImage: "assets/images/nsc.png",
    moocLink: "https://www.credly.com/badges/1cc1bec7-c6a0-452d-985b-0cbc1c8912cf/public_url",
  },

  {
    title: "Google Analytics Certification",
    cardImage: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/97987477",
    moocLink:
      "https://skillshop.credential.net/2b8d905b-eb8f-4432-85ad-17b12adf7816",
  },

  {
    title: "SQL (Basic)",
    cardImage: "https://media.licdn.com/dms/image/D560BAQE8MivsmbT7Ig/company-logo_200_200/0/1705561459405/hackerrank_logo?e=1720656000&v=beta&t=FGVKfB-iSIYNI5efDplADFHbjmcpbLGohYI3zAgJd0c",
    moocLink:
      "https://www.hackerrank.com/certificates/9c27615075a7",
  },
  
  {
    title: "Geoprocessing using Python",
    cardImage: "assets/images/isro.png",
    moocLink:
      "https://drive.google.com/file/d/1puumG65yc166cRCAiEIY_BJ01C6I-oJj/view?usp=sharing",
  },

  {
    title: "Cyber Security and Digital Forensics",
    cardImage: "assets/images/ch.jpg",
    moocLink:
      "https://drive.google.com/file/d/1QrOSpr4OMYaBb6ALJDNu3HwJOEOjeiyX/view?usp=sharing",
  },

  

  {
    title: "Introduction to MongoDB",
    cardImage: "assets/images/mongo.png",
    moocLink:
      "https://drive.google.com/file/d/1XsArrTQcEbNR2AyHes51QHuREKg6eYHI/view?usp=sharing",
  },

  {
    title: "Career Edge - Young Professional",
    cardImage: "assets/images/tcs1.jpg",
    moocLink:
      "https://drive.google.com/file/d/1I9Kbzr8bHZwkdUxGFW7Znx96DzNuJeM7/view?usp=share_link",
  },
  
 
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500"  style="margin-bottom: 30px;">  
            <div class="card mb-3 mx-auto bg-white"  style="max-width: 300px; border: 4px solid #3d96fd;">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
