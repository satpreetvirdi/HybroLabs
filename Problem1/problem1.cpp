#include <iostream>
using namespace std;

int main()
{
     char s[100] = "";
    cout << "Enter String ->";
    cin >> s;
    int count = 0;
    for (int i = 60; i <= 122; i++)
    {
        count = 0;
        for (int j = 0; j < sizeof(s); j++)
        {
            if ((int)s[j] == i)
            {
                count = count + 1;
            }
        }
        if (count > 0)
        {
            cout << (char)i << " - " << count << endl;
        }
    }
    return 0;
}