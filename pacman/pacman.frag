#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

const vec4 GREY=vec4(vec3(0.8), 1);
const vec4 BLACK=vec4(vec3(0), 1);
const vec4 BLUE = vec4(0,0,1,1);
const vec4 YELLOW = vec4(1,1,0,1);

const float border = 0.005f;

uniform sampler2D colormap;

void main()
{

	
  	if(vtexCoord.x > (1-border) || vtexCoord.x < border || vtexCoord.y > (1-border)|| vtexCoord.y < border) {
  		fragColor = BLUE;
  		return;
  	}
  	
  	for(float i = 0.1f; i<1; i+=0.1f) {
  		if(vtexCoord.x < i + border && vtexCoord.x > i && int(vtexCoord.y * 10) % 2 == 0) {
  			fragColor = BLUE;
  			return;
  		}
  	}
  	
  	for(float i = 0.1f; i<1; i+=0.1f) {
  		if(vtexCoord.y < i + border && vtexCoord.y > i && int(vtexCoord.x * 10) % 2 != 0) {
  			fragColor = BLUE;
  			return;
  		}
  	}
  	
  	//Pacman
  	if(vtexCoord.x < 0.3f && vtexCoord.x > 0.2f && vtexCoord.y > 0.3f && vtexCoord.y < 0.4f) {
  		fragColor = texture(colormap, (vtexCoord - vec2(0.2f, 0.3f)) * 10 * vec2(0.5f, 1) + vec2(0.5f, 0));
  		return;
  	}
  	
  	//Fantasma 1
  	if(vtexCoord.x < 0.3f && vtexCoord.x > 0.2f && vtexCoord.y > 0.2f && vtexCoord.y < 0.3f) {
  		fragColor = texture(colormap, (vtexCoord - vec2(0.2f, 0.2f)) * 10 * vec2(0.5f, 1));
  		return;
  	}

  	//Fantasma 2
  	if(vtexCoord.x < 0.5f && vtexCoord.x > 0.4f && vtexCoord.y > 0.1f && vtexCoord.y < 0.2f) {
  		fragColor = texture(colormap, (vtexCoord - vec2(0.4f, 0.1f)) * 10 * vec2(0.5f, 1));
  		if (fragColor.r == 1) {
  			fragColor = vec4(1,0,1,1);
  		}
  		return;
  	}
  	
  	//Fantasma 3
  	if(vtexCoord.x < 0.5f && vtexCoord.x > 0.4f && vtexCoord.y > 0.5f && vtexCoord.y < 0.6f) {
  		fragColor = texture(colormap, (vtexCoord - vec2(0.4f, 0.5f)) * 10 * vec2(0.5f, 1));
  		if (fragColor.r == 1) {
  			fragColor = vec4(1,0.5f,0,1);
  		}
  		return;
  	}
  	
  	//Fantasma 4
  	if(vtexCoord.x < 0.7f && vtexCoord.x > 0.6f && vtexCoord.y > 0.5f && vtexCoord.y < 0.6f) {
  		fragColor = texture(colormap, (vtexCoord - vec2(0.6f, 0.5f)) * 10 * vec2(0.5f, 1));
  		// Tiene un borde rojo que no consigo quitarlo
  		if (fragColor.r == 1 && fragColor.g <1 && fragColor.b < 1) {
  			fragColor = BLUE;
  		}
  		return;
  	}
  	
  	for(float i = 0.05f; i< 1.0f; i+=0.1f) {
  		for (float j = 0.05f; j<1.0f; j+=0.1f) {
  			if (distance(vec2(i, j), vtexCoord) < 0.01f) {
		  		fragColor = YELLOW;
		  		return;
		  	}
  		}	
  	}
  	
  	
  	
  	fragColor =  BLACK;
}
