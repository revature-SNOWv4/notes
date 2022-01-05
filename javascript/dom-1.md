## Document Object Model (DOM)

The Document Object Model (DOM) is a programming API for HTML and XML documents. It enables Javascript to access and manipulate the elements and styles of a website. The browser creates a tree-like hierarchical representation of the HTML document, that tree-like structure is known as **DOM Structure** or a **DOM tree**.

![dom structure](./images/dom_structure.PNG)

Each HTML element in the DOM tree is an object. The positions of the elements in the DOM tree are nodes.The tags are element nodes. Attributes in the elements are attribute nodes. The text inside elements is a text node. It may not have children and is always a leaf of the tree. The root of the DOM tree is a `<html>` element,
which is known as a **document object**.


**Example:**

Below, we have a simple HTML Document:

```html
<!DOCTYPE HTML>
<html>
    <head>
      <title>Title goes here</title>
    </head>
    <body>
          <p> DOM Structure </p>
    </body>
</html>
```

The DOM structure for the above HTML document looks like:

```
HTML (root)
|  
|---HEAD
|     |
|     |----TITLE
|            |
|            |-----#text - "Title goes here"
|       
|---BODY
     |
     |----P
          |
          |----- #text - "DOM Structure"
            
```