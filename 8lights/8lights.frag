#version 330 core

in vec3 N;
in vec3 P;
in vec3 V;
in vec3 l1,l2,l3,l4,l5,l6,l7,l8;
out vec4 fragColor;

uniform vec4 lightAmbient; 
uniform vec4 lightDiffuse; 
uniform vec4 lightSpecular;
uniform vec4 lightPosition; 

uniform vec4 matAmbient; 
uniform vec4 matDiffuse; 
uniform vec4 matSpecular; 
uniform float matShininess;

uniform int n = 8;
const float pi = 3.141592;

uniform bool world;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;

vec4 light(vec3 N, vec3 V, vec3 L)
{
	 L=normalize(L-P);
	 vec3 R = normalize( 2.0*dot(N,L)*N-L );
	 float NdotL = max( 0.0, dot( N,L ) );
	 float RdotV = max( 0.0, dot( R,V ) );
	 float Idiff = NdotL;
	 float Ispec = 0;
	 if (NdotL>0) Ispec=pow( RdotV, matShininess );
	 return
	 ((matDiffuse * lightDiffuse * Idiff) / 2)+
	 matSpecular * lightSpecular * Ispec;
}

void main()
{
	vec3 Nn = normalize(N);
	vec3 Vn = normalize(V);
	
	fragColor = vec4(0.0f);
	
	fragColor += light(Nn, Vn, l1);
	fragColor += light(Nn, Vn, l2);
	fragColor += light(Nn, Vn, l3);
	fragColor += light(Nn, Vn, l4);	
	fragColor += light(Nn, Vn, l5);
	fragColor += light(Nn, Vn, l6);
	fragColor += light(Nn, Vn, l7);
	fragColor += light(Nn, Vn, l8);
}


