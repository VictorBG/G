#version 330 core

in vec3 N;
in vec3 V;
in vec3 L;
in vec3 p;
out vec4 fragColor;

uniform vec4 lightAmbient; 
uniform vec4 lightDiffuse; 
uniform vec4 lightSpecular;
uniform vec4 lightPosition; 

uniform vec4 matAmbient; 
uniform vec4 matDiffuse; 
uniform vec4 matSpecular; 
uniform float matShininess;

uniform int n = 3;
const float pi = 3.141592;

uniform bool world;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}


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
	 ((matDiffuse * lightDiffuse * Idiff) / sqrt(n))+
	 matSpecular * lightSpecular * Ispec;
}

void main()
{
	vec4 l = vec4(0.0f);
	vec3 ll = vec3(10,0,0);
	for(int i=0; i<n; i++) {
	 	vec2 a = rotate(ll.xy, i * (2 * pi /n));
	 	l += light(N, V, vec3(a.x, a.y, 0.0) - p);
	 }
    fragColor = l;
}


