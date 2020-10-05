#version 330 core

in vec4 frontColor;
in vec3 Norm;
in vec3 pos;

out vec4 fragColor;

uniform vec4 lightAmbient; 
uniform vec4 lightDiffuse; 
uniform vec4 lightSpecular;
uniform vec4 lightPosition; 

uniform vec4 matAmbient; 
uniform vec4 matDiffuse; 
uniform vec4 matSpecular; 
uniform float matShininess; 

void main()
{
    vec3 N = normalize(Norm);
    vec3 position = normalize(pos);
    vec3 L = normalize(lightPosition.xyz - position);
    float NL = dot(normalize(N), L);
    vec3 V = normalize(-position).xyz;
    fragColor = lightAmbient * matAmbient + matDiffuse * lightDiffuse * max(0.0, NL);
    if (NL > 0.0) {    	
    	vec3 R = normalize(2 * NL * N - L);
    	float RV = dot(R, V);
    	fragColor = fragColor + matSpecular * lightSpecular * max(0.0, pow(RV, matShininess));	
    }
}
