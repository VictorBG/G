#include "modelInfo.h"
#include "glwidget.h"

void ModelInfo::onPluginLoad()
{
	
}

void ModelInfo::preFrame()
{
	
}

void ModelInfo::postFrame()
{
	const vector<Object> &objs = scene()->objects();
	int num_vertices = 0;
	int num_faces = 0;
	int num_obj = objs.size();
	int num_triangle = 0;
	for(int i=0; i< num_obj; i++) {
		const Object& obj = objs[i];
		const vector<Face> &faces = obj.faces();
		for(int j = 0; j< faces.size(); j++) {
			if(faces[i].numVertices() == 3) {
				num_triangle++;
			}
		}
		num_vertices += obj.vertices().size();
		num_faces += faces.size();
	}
	cout << "Nº objetos: " << num_obj << endl;
	cout << "Nº caras: " << num_faces << endl;
	cout << "Nº vertices: " << num_vertices << endl;
	cout << "Triangulos: "  << (num_triangle / num_faces * 100) << "%" << endl;
	
}

void ModelInfo::onObjectAdd()
{
	
}

bool ModelInfo::drawScene()
{
	return false; // return true only if implemented
}

bool ModelInfo::drawObject(int)
{
	return false; // return true only if implemented
}

bool ModelInfo::paintGL()
{
	return false; // return true only if implemented
}

void ModelInfo::keyPressEvent(QKeyEvent *)
{
	
}

void ModelInfo::mouseMoveEvent(QMouseEvent *)
{
	
}

