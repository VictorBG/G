#version 330 core

in vec3 N;
in vec3 V;
in vec3 L;
out vec4 fragColor;

uniform vec4 lightAmbient; 
uniform vec4 lightDiffuse; 
uniform vec4 lightSpecular;
uniform vec4 lightPosition; 

uniform vec4 matAmbient; 
uniform vec4 matDiffuse; 
uniform vec4 matSpecular; 
uniform float matShininess;
uniform mat4 modelViewMatrixInverse;

uniform bool world;

vec4 light(vec3 N, vec3 V, vec3 L)
{
	 N=normalize(N); V=normalize(V); L=normalize(L);
	 vec3 R = normalize( 2.0*dot(N,L)*N-L );
	 float NdotL = max( 0.0, dot( N,L ) );
	 float RdotV = max( 0.0, dot( R,V ) );
	 float Idiff = NdotL;
	 float Ispec = 0;
	 if (NdotL>0) Ispec=pow( RdotV, matShininess );
	 return
	 matAmbient * lightAmbient +
	 matDiffuse * lightDiffuse * Idiff+
	 matSpecular * lightSpecular * Ispec;
}

void main()
{
    fragColor = light(N, V, L);
}


