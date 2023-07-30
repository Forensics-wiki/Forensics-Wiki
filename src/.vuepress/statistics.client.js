export default ({ router }) => {
    if (process.env.NODE_ENV === 'production') {
      const script1 = document.createElement('script');
      script1.charset = 'UTF-8';
      script1.src = '//sdk.51.la/js-sdk-pro.min.js';
      const script2 = document.createElement('script');
      script2.innerHTML = 'LA.init({id:"K2xUaYGSFQf9s7gd",ck:"K2xUaYGSFQf9s7gd"});';
      document.head.appendChild(script1);
      document.head.appendChild(script2);
    }
  };
  