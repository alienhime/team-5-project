/*
 *  Author: Mikayla Roberts <misrober@ucsc.edu>
 *  Created: 4 December 2021
 *  License: Public Domain
 */

 // Using the core $.ajax() method
 $.ajax({
   // The URL for the request (from the api docs)
   url: "https://api.coastal.ca.gov/vulnerability/v1/counties/8",
   // Whether this is a POST or GET request
   type: "GET",
   // The type of data we expect back
   dataType : "json",
   // What do we do when the api call is successful
   //   all the action goes in here
   success: function(data) {
       // do stuff
       console.log(data);
       // General Info
       var countyName = data[0].county_name;
       console.log(countyName);
       var mainBeachUrl = data[0].photos[0].photo_2;
       var titleText = "title='Santa Cruz Main Beach'";
       $("#general_info").append("<img src=" + mainBeachUrl + " " + titleText + ">");
       $("#general_info").append("<p>County Name: " + countyName);
       $("#general_info").append("<p>Latitude: " + data[0].latitude);
       $("#general_info").append("<p>Longitude: " + data[0].longitude);
       $("#general_info").append("<p><a href=" + data[0].assessment + ">Assessment</a>");
       // Resources
       console.log(data[0].resources[0].ports_harbors);
       $("#resources").append("<p>Number of Ports & Harbors: " + data[0].resources[0].ports_harbors);
       $("#resources").append("<p>Publicly Owned/Accessible Coast: " + data[0].resources[0].public_owned + " acres");
       $("#resources").append("<p>Public Access Coastal Areas: " + data[0].resources[0].beach_access + " locations");
       $("#resources").append("<p>Coastal Zone Wetlands: " + data[0].resources[0].cz_wetlands + " acres");
       $("#resources").append("<p>Shoreline: " + data[0].resources[0].shoreline_miles + " miles");
       // economy
       console.log(data[0].economy[0]);
       $("#economy").append("<p>Tourism & Recreation GDP: $" + data[0].economy[0].tourism_recreation);
       $("#economy").append("<p>Transportation GDP: $" + data[0].economy[0].transportation);
       var sourceName = data[0].economy[0].source_name;
       var sourceUrl = data[0].economy[0].source_url;
       $("#economy").append("<p>Source: <a href=" + sourceUrl + ">" + sourceName + "</a>");
       // lcps
       console.log(data[0].LCPs[0]);
       var davenportUrl = data[0].photos[0].photo_1;
       var titleText2 = "title='Davenport Bluffs'";
       $("#lcps").append("<img src=" + davenportUrl + " " + titleText2 + ">");
       $("#lcps").append("<h3>" + data[0].LCPs[0].lcp_name);
       $("#lcps").append("<p>LCP Certified: " + data[0].LCPs[0].status[0].certified_status);
       $("#lcps").append("<p>Year Certified: " + data[0].LCPs[0].status[0].certified_year);
       $("#lcps").append("<p>Grants: " + data[0].LCPs[0].status[0].grants);
       $("#lcps").append("<p>Vulnerability Assessment: " + data[0].LCPs[0].status[0].vulnerability_assessment);
       $("#lcps").append("<p>Updated for SLR: " + data[0].LCPs[0].status[0].updated_for_slr);
       $("#lcps").append("<h3>" + data[0].LCPs[1].lcp_name);
       $("#lcps").append("<p>LCP Certified: " + data[0].LCPs[1].status[0].certified_status);
       $("#lcps").append("<p>Year Certified: " + data[0].LCPs[1].status[0].certified_year);
       $("#lcps").append("<p>Grants: " + data[0].LCPs[1].status[0].grants);
       $("#lcps").append("<p>Vulnerability Assessment: " + data[0].LCPs[1].status[0].vulnerability_assessment);
       $("#lcps").append("<p>Updated for SLR: " + data[0].LCPs[1].status[0].updated_for_slr);
       $("#lcps").append("<h3>" + data[0].LCPs[2].lcp_name);
       $("#lcps").append("<p>LCP Certified: " + data[0].LCPs[2].status[0].certified_status);
       $("#lcps").append("<p>Year Certified: " + data[0].LCPs[2].status[0].certified_year);
       $("#lcps").append("<p>Grants: " + data[0].LCPs[2].status[0].grants);
       $("#lcps").append("<p>Vulnerability Assessment: " + data[0].LCPs[2].status[0].vulnerability_assessment);
       $("#lcps").append("<p>Updated for SLR: " + data[0].LCPs[2].status[0].updated_for_slr);
       $("#lcps").append("<h3>" + data[0].LCPs[3].lcp_name);
       $("#lcps").append("<p>LCP Certified: " + data[0].LCPs[3].status[0].certified_status);
       $("#lcps").append("<p>Year Certified: " + data[0].LCPs[3].status[0].certified_year);
       $("#lcps").append("<p>Grants: " + data[0].LCPs[3].status[0].grants);
       $("#lcps").append("<p>Vulnerability Assessment: " + data[0].LCPs[3].status[0].vulnerability_assessment);
       $("#lcps").append("<p>Updated for SLR: " + data[0].LCPs[3].status[0].updated_for_slr);
       // Risks
       $("#risks").append("<p>Environmentally Sensitive Habitat Areas: " + data[0].risks[0].esha);
       $("#risks").append("<p>Wetlands: " + data[0].risks[0].wetlands);
       $("#risks").append("<p>Residential: " + data[0].risks[0].residential);
       $("#risks").append("<p>Infrastructure: " + data[0].risks[0].infrastructure);
       $("#risks").append("<p>Energy: " + data[0].risks[0].energy);
       $("#risks").append("<p>Public Access Recreation: " + data[0].risks[0].public_access_recreation);
       $("#risks").append("<p>Water Quality: " + data[0].risks[0].water_quality);
       $("#risks").append("<p>Ports: " + data[0].risks[0].ports);
       $("#risks").append("<p>Beaches: " + data[0].risks[0].beaches);
       $("#risks").append("<p>Agriculture: " + data[0].risks[0].agriculture);
       $("#risks").append("<p>Cultural Archeological Resources: " + data[0].risks[0].cultural_archeological_resources);
       // console.log(comicObj);
       // console.log(comicObj.title);
       // $("#imgTitle").html(comicObj.title);
       // console.log(comicObj.img);
       // var imgUrl = comicObj.img;
       // var imgTag = "<img src=" + imgUrl + ">";
       // $("#comic").html(imgTag);
       // console.log(comicObj.alt);
       // $("#alt_text").html(comicObj.alt);
   },
   // What we do if the api call fails
   error: function (jqXHR, textStatus, errorThrown) {
       // do stuff
       console.log("Error:", textStatus, errorThrown);
   }
});
