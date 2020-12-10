#include "modelInfo2.h"
#include "glwidget.h"

void ModelInfo2::onPluginLoad()
{
	
}

void ModelInfo2::preFrame()
{
	
}

void ModelInfo2::postFrame()
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
	
	QFont font;
  font.setPixelSize(15);
  painter.begin(glwidget());
  painter.setFont(font);
  int x = 15;
  int y = 15;
  QString st = "Nº objetos: \%1;  Nº caras: \%2;  Nº vertices: \%3;  Triangulos: \%4%";
  painter.drawText(x, y, st.arg(num_obj).arg(num_faces).arg(num_vertices).arg(num_triangle / num_faces * 100)); 
  painter.end();
	
}

void ModelInfo2::onObjectAdd()
{
	
}

bool ModelInfo2::drawScene()
{
	return false; // return true only if implemented
}

bool ModelInfo2::drawObject(int)
{
	return false; // return true only if implemented
}

bool ModelInfo2::paintGL()
{
	return false; // return true only if implemented
}

void ModelInfo2::keyPressEvent(QKeyEvent *)
{
	
}

void ModelInfo2::mouseMoveEvent(QMouseEvent *)
{
	
}

