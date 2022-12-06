const scanner = talab ('sonarqube-scanner');
skaner( 
  { 
  serverUrl: "http://localhost:9000", 
  login:"admin", 
  parol:"admin", 
  variantlar: { 
    "sonar.sources": "./src" 
  }, 
}, 
() => jarayon .exit() 
);