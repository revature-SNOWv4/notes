# Overview of Web Services
 
The W3C, World Wide Web Consortium, acknowledges that the definition of web services is not universal or well defined, but described them in 2004 by saying 
 
**Definition**
"is a software system designed to support interoperable machine-to-machine interaction over a network. It has an interface described in a machine-processable format (specifically WSDL). Other systems interact with the Web service in a manner prescribed by its description using SOAP-messages, typically conveyed using HTTP with an XML serialization in conjunction with other Web-related standards."- W3C
 
Since then arguably the definition has evolved as the one used above relates more specifically to SOAP services, but the first piece is widely accepted. A web service is a software that allows machines to exchange and make use of information over a network. In order to function over a network, a web service must be designed adhering to particular standards of communication (often this will be HTTP). The web service will be exposed via a consumable API. 
 
Web services usually format the information they make available using XML or JSON.
 
Typically Web Services are divided into two flavors:
- REST 
- SOAP
 
These are essentially two approaches to defining a web service in a standardized way that enables users of the service to interact with the information provided by the web service.
 
# REST
Stands for **Representational State Transfer**. 
 
Defined originally by Roy Fielding in his dissertation in 2000, REST is an *architectural style* that outlines communication between a client and server over the web. 
 
Essentially for a web service to be RESTful it has to adhere to a set of guidelines or constraints.
 
A RESTful server should not retain information about the state of the client. 
 
Clients communicate with the server through an interface that is standard in that it too follows another set of constraints: 
"defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state." - Roy Fielding
 
In a RESTful system, the server creates an object or resource and returns the *state* of that object (the values contained within the object) when requested by the client.
 
 
# SOAP
Stands for **Simple Object Access Protocol**. It is a protocol that allows for interoperability between two machines across a network. The W3C maintains the specifications that define SOAP. 
 
SOAP services respond to requests in the form of XML documents, called messages, and though a SOAP service can receive any kind of request, if it's an HTTP request then it must be in the form of an HTTP post request. 
 
The designers of SOAP intended for SOAP-based services to be simple to use/understand and to allow the addition of new functionality.
 
## References
- [IBM article](https://www.ibm.com/support/knowledgecenter/SSGMCP_4.2.0/com.ibm.cics.ts.webservices.doc/concepts/dfhws_definition.html)
- [IBM API v. Service Video](https://www.youtube.com/watch?v=qGFRbOq4fmQ)
- [W3C article](https://www.w3.org/DesignIssues/WebServices.html)
- [W3C article](https://www.w3.org/TR/ws-gloss/)
- [IMB Web Service Architecture](https://www.ibm.com/support/knowledgecenter/SSB23S_1.1.0.15/gtps6/s6wsrol.html)
- [Oracle Web Services Overview](https://docs.oracle.com/cd/B14099_19/web.1012/b14027/intro.htm#i1018810)
- [REST v. SOAP](https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/brownfield/soap-rest-and-more)
- [Redhat REST v. SOAP](https://www.redhat.com/en/topics/integration/whats-the-difference-between-soap-rest)
### REST
- [Rest API/Web service video from Telusko](https://www.youtube.com/watch?v=qVTAB8Z2VmA)
- [REST definition](https://developer.mozilla.org/en-US/docs/Glossary/REST)
- [REST Spring tutorial- especially the overview](https://spring.io/guides/tutorials/rest/)
- [Roy Feilding-REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) 
- [(Not so much of a reference, but just kinda cool.) Roy Feilding Talk on REST](https://www.youtube.com/watch?v=w5j2KwzzB-0)
### SOAP
- [Oracle docs on SOAP](https://docs.oracle.com/cd/A97335_02/integrate.102/a90297/overview.htm)
- [W3C specification](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [Sampling of Books from Science Direct](https://www.sciencedirect.com/topics/computer-science/simple-object-access-protocol)
 