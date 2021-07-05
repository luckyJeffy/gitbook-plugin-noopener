# Gitbook Plugin `noopener`

This extension add `rel="noopener noreferrer"` for all anchor tag link in content when target not equal with `it self domain`.

```
Current hostname:
console.log(window.location.hostname) // google.com

Gitbook content got some link like:
<a href="youtube.com">Link to Youtube</a> // target hostname is not equal with current hostname

Plugin will convert the anchor tag attribute like:
<a href="youtube.com" rel="noopener noreferrer">>Link to Youtube</a>
```

This improves the security of the site:

- **noopener**: Instructs the browser to open the link without granting the new browsing context access to the document that opened it — by not setting the Window.opener property on the opened window (it returns null).
- **noreferrer**: Prevents the browser, when navigating to another page, to send this page address, or any other value, as referrer via the `Referer:` HTTP header.

## Installation

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "noopener" ]
}		
```
